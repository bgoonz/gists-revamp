#include <v8.h>
#include <fcntl.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

#include <engine.h>

// Extracts a C string from a V8 Utf8Value.
const char* ToCString(const v8::String::Utf8Value& value) {
  return *value ? *value : "<string conversion failed>";
}

v8::Handle<v8::Value> ioRead(const v8::Arguments& args) {
  v8::Handle<v8::String> source = ReadIO();
  if (source.IsEmpty()) {
    return v8::ThrowException(v8::String::New("Error reading from input"));
  }
  return source;
}

v8::Handle<v8::Value> ioWrite(const v8::Arguments& args) {
  for (int i = 0; i < args.Length(); i++) {
    v8::HandleScope handle_scope;
    v8::String::Utf8Value str(args[i]);
    const char* cstr = ToCString(str);
	WriteIO(cstr);
  }
  return v8::Undefined();
}

v8::Handle<v8::Value> ioFlush(const v8::Arguments& args) {
  FlushIO();
  return v8::Undefined();
}

v8::Handle<v8::Value> fsRead(const v8::Arguments& args) {
  if (args.Length() != 1) {
    return v8::ThrowException(v8::String::New("Bad parameters"));
  }
  v8::String::Utf8Value file(args[0]);
  if (*file == NULL) {
    return v8::ThrowException(v8::String::New("Error loading file"));
  }
  v8::Handle<v8::String> source = ReadFile(*file);
  if (source.IsEmpty()) {
    return v8::ThrowException(v8::String::New("Error loading file"));
  }
  return source;
}

v8::Handle<v8::Value> fsWrite(const v8::Arguments& args) {
  if (args.Length() != 2) {
    return v8::ThrowException(v8::String::New("Bad parameters"));
  }
  v8::String::Utf8Value file(args[0]);
  v8::String::Utf8Value content(args[1]);
  if (*file == NULL || *content == NULL) {
    return v8::ThrowException(v8::String::New("Error writing file"));
  }
  
  WriteFile(*file,*content,5);	// TODO: get length of content
  
  return v8::Undefined();
}

v8::Handle<v8::Value> sysExec(const v8::Arguments& args) {
  if (args.Length() < 1) {
    return v8::ThrowException(v8::String::New("Bad parameters"));
  }
  v8::String::Utf8Value command(args[0]);
  if (*command == NULL) {
    return v8::ThrowException(v8::String::New("Command parsing broken"));
  }
  
  executeProcess(args);
  
  v8::Handle<v8::Value> result;
  
  return result;
}




// Reads a file into a v8 string.
v8::Handle<v8::String> ReadFile(const char* name) {
  FILE* file = fopen(name, "rb");
  if (file == NULL) return v8::Handle<v8::String>();

  fseek(file, 0, SEEK_END);
  int size = ftell(file);
  rewind(file);

  char* chars = new char[size + 1];
  chars[size] = '\0';
  for (int i = 0; i < size;) {
    int read = fread(&chars[i], 1, size - i, file);
    i += read;
  }
  fclose(file);
  v8::Handle<v8::String> result = v8::String::New(chars, size);
  delete[] chars;
  return result;
}

// Writes string to a file.
void WriteFile(const char* name, const char* content, const int size) {
  FILE* file = fopen(name, "wb");
  if (file == NULL) return;

  fwrite(content,1,size,file);

  fclose(file);
}

v8::Handle<v8::String> ReadIO() {
  return v8::Handle<v8::String>();
}

void WriteIO(const char* content) {
  printf("%s", content);
}

void FlushIO() {
  fflush(stdout);
}

v8::Handle<v8::String> executeProcess(const v8::Arguments& args) {
  return v8::Handle<v8::String>();
}


void ReportException(v8::TryCatch* try_catch) {
  v8::HandleScope handle_scope;
  v8::String::Utf8Value exception(try_catch->Exception());
  const char* exception_string = ToCString(exception);
  v8::Handle<v8::Message> message = try_catch->Message();
  if (message.IsEmpty()) {
    // V8 didn't provide any extra information about this error; just
    // print the exception.
    printf("%s\n", exception_string);
  }
  else {
    // Print (filename):(line number): (message).
    v8::String::Utf8Value filename(message->GetScriptResourceName());
    const char* filename_string = ToCString(filename);
    int linenum = message->GetLineNumber();
    printf("%s:%i: %s\n", filename_string, linenum, exception_string);
    // Print line of source code.
    v8::String::Utf8Value sourceline(message->GetSourceLine());
    const char* sourceline_string = ToCString(sourceline);
    printf("%s\n", sourceline_string);
    // Print wavy underline (GetUnderline is deprecated).
    int start = message->GetStartColumn();
    for (int i = 0; i < start; i++) {
      printf(" ");
    }
    int end = message->GetEndColumn();
    for (int i = start; i < end; i++) {
      printf("^");
    }
    printf("\n");
  }
}

bool ExecuteString(v8::Handle<v8::String> source, v8::Handle<v8::Value> name, bool print_result, bool report_exceptions) {
  v8::HandleScope handle_scope;
  v8::TryCatch try_catch;
  v8::Handle<v8::Script> script = v8::Script::Compile(source, name);
  if (script.IsEmpty()) {
    // Print errors that happened during compilation.
    if (report_exceptions)
      ReportException(&try_catch);
    return false;
  } else {
    v8::Handle<v8::Value> result = script->Run();
    if (result.IsEmpty()) {
      // Print errors that happened during execution.
      if (report_exceptions)
        ReportException(&try_catch);
      return false;
    } else {
      if (print_result && !result->IsUndefined()) {
        // If all went well and the result wasn't undefined then print
        // the returned value.
        v8::String::Utf8Value str(result);
        const char* cstr = ToCString(str);
        printf("%s\n", cstr);
      }
      return true;
    }
  }
}







int RunMain(int argc, char* argv[]) {
  v8::V8::SetFlagsFromCommandLine(&argc, argv, true);
  v8::HandleScope handle_scope;
  
  v8::Handle<v8::ObjectTemplate> global = v8::ObjectTemplate::New();

  v8::Handle<v8::Context> context = v8::Context::New(NULL, global);
  v8::Context::Scope context_scope(context);
  
  v8::Handle<v8::String> source = ReadFile("engine.js");
  v8::Handle<v8::Script> compiled_source = v8::Script::Compile(source);
  if (compiled_source.IsEmpty()) {
    printf("Error reading engine.js\n");
    return 1;
  }
  v8::Handle<v8::Value> enginejs = compiled_source->Run();
  v8::Handle<v8::Function> enginejs_func = v8::Handle<v8::Function>::Cast(enginejs);
  
  v8::Handle<v8::Object> inject = v8::Object::New();
  inject->Set(v8::String::New("IOREAD"), v8::FunctionTemplate::New(ioRead)->GetFunction());
  inject->Set(v8::String::New("IOWRITE"), v8::FunctionTemplate::New(ioWrite)->GetFunction());
  inject->Set(v8::String::New("IOFLUSH"), v8::FunctionTemplate::New(ioFlush)->GetFunction());
  inject->Set(v8::String::New("FSREAD"), v8::FunctionTemplate::New(fsRead)->GetFunction());
  inject->Set(v8::String::New("FSWRITE"), v8::FunctionTemplate::New(fsWrite)->GetFunction());
  inject->Set(v8::String::New("SYSEXEC"), v8::FunctionTemplate::New(sysExec)->GetFunction());
  v8::Handle<v8::Value> args[1] = {inject};
  
  v8::Handle<v8::Object> global2 = v8::Object::New();

  enginejs_func->Call(context->Global(), 1, args);
  
  for (int i = 1; i < argc; i++) {
    const char* str = argv[i];
	if (strcmp(str, "-f") == 0) {
      // Ignore any -f flags for compatibility with the other stand-
      // alone JavaScript engines.
      continue;
    }
	else if (strncmp(str, "--", 2) == 0) {
      printf("Warning: unknown flag %s.\nTry --help for options\n", str);
    }
	else {
      // Use all other arguments as names of files to load and run.
      v8::HandleScope handle_scope;
      v8::Handle<v8::String> file_name = v8::String::New(str);
      v8::Handle<v8::String> source = ReadFile(str);
      if (source.IsEmpty()) {
        printf("Error reading '%s'\n", str);
        return 1;
      }
      if (!ExecuteString(source, file_name, false, true))
        return 1;
    }
  }
  return 0;
}

int main(int argc, char* argv[]) {
  int result = RunMain(argc, argv);
  v8::V8::Dispose();
  return result;
}

