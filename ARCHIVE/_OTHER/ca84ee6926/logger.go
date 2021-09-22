package logger

import (
	"bytes"
	"io"
	"log"
)

type FilteredWriter struct {
	io.Writer
}

var msgsToFilter = [][]byte{
	[]byte("http2Server.HandleStreams failed to receive the preface from client"),
	[]byte("another useless log message"),
}

func (f *FilteredWriter) Write(b []byte) (int, error) {
	for _, msg := range msgsToFilter {
		if bytes.Contains(b, msg) {
			return 0, nil
		}
	}
	return f.Writer.Write(b)
}

// New creates a new log.Logger with a filterd writer
func New(w io.Writer) *log.Logger {
	return log.New(&FilteredWriter{Writer: w}, "gRPC: ", log.Ldate|log.Ltime)
}