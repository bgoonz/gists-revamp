# Misleading Questions

<img src="http://gyazo.com/f3f844b5581b4155ee59f5e96620a15c.png">

Question 3 says that C was the language from which JavaScript drew its syntax. While technically true, it's misleading, because Scheme was actually where a lot of the features for JS came from. That answer should either also be correct, or left out of the options, to not be misleading.

# Correct Answers But Misleading

<img src="http://gyazo.com/0f681bc918207354320487d81ca797b7.png">

This answer is correct, but it's misleading, because it skirts around the much more important fact that "Harmony" is the (very public) code name for the next version of JavaScript, also known as "ES6" or "ES.next". This version of the language represents a significant syntax and functionality step forward for the language, and most definitely will be very standardized cross-browser. To suggest otherwise is highly misleading.

<img src="http://gyazo.com/69ba6aafc9352fff491b645ffd26ca05.png">

This answer is correct, but it's misleading because it's incomplete. Returning a function from another function is ONE way that closer is created, but there are several other patterns for how closures are created, including setting a function into a variable/property outside its scope, or passing a function as a parameter to another function.

The more accurate way to describe closure is that closure happens whenever a function remembers its own lexical scope (that is, all the variables it has knowledge of and access to) when that function is then executed outside of that lexical scope. The methods by which a function gets transported outside of its lexical scope are as just described, but then a closure is only observable once that "fish out of water" function is actually executed and makes use of the remembered lexical scope.

Otherwise, closure is hidden and unobservable, and for all intents and purposes doesn't exist, because in fact in those hidden cases, the JS engine would not even actually be required to have created those closure references if they are never used or expressed.

<img src="http://gyazo.com/7f77ca647f229e56c6c857de9c566906.png">

Again, this answer is technically correct, but the possible answers are misleading because more than one of them are correct, and the one selected here is not exactly even the "most correct".

The four available answers are:

* Creating and disposing of objects whenever you need them
* Using short variable names
* Using prototypes
* Avoiding closures when possible 

The fourth answer is more "incorrect" than "correct" in that doing so will at best help speed things up (the question asks "not help"), and at worst, have no impact. Closures don't necessarily slow the engine down, but they can lead to more memory usage, which in an indirect way MIGHT slow things down. But if they're not slowing things down in your program, avoiding them won't speed up anything, it won't affect anything at all. In that case, the fourth answer COULD be considered correct. So, the fourth answer is misleading, could be correct, might not be.

The first and third answers are "correct" in a round about sense. The question asked which ones "will not help your JavaScript run faster". The question doesn't ask "which ones will slow down your JavaScript". Those are sort of similar questions, but it's misleading to treat them as exactly the same.

Anyway, if we look the other way and say those two questions are the same, then the first and third answers can be proven to create extra "work" for the engine and thus can slow things down. How much? Totally impossible to tell or claim out of context. Depends. Misleading to suggest that these techniques abjectly slow down, or rather that they "will not help...".

The second answer is provably completely not going to affect performance no matter what, so it ALSO "will not help...".

So all 3 of those answers are "correct" (and possibly the fourth). The second answer is quite arguably "more correct" because it's the only one in the list which honors most closely the spirit of the actual original question, "what doesn't help..." (instead of "what can hurt..."). The short variable names definitely don't do anything to help (or hurt). The other three answers may or may not help or hurt performance, impossible to say for sure out of context.

<img src="http://gyazo.com/2d26439d0d238c6b8f479fbc50d76ac3.png">

This answer is technically more correct than the others, but it's misleading. All 4 answers *can* create objects. This fourth answer MIGHT create an object, if there's a function called `List` defined by the user (it's not built-in to the language or browser, for sure). If a user has made a function called `List` (regardless of what it does), calling it with `new` WILL create a new object, that's what `new` does. The fact that this object may never get used or is discarded implicitly doesn't mean it's not created.

The fact that this is supposed to be the correct answer because you're supposed to assume it throws an error because `List` is not built-in is confusing and misleading. The question should specify that there is in fact no `List` predefined, which would mean that it will not create an object, but for the more accurate reason that it will throw an error.

# Correct Answers, Wrong Explanations

<img src="http://gyazo.com/9d1b076f012cc2472c0b4ab213f91257.png">

Correct answer... but...

The first sentence is correct here in the explanation. The second statement is false, and the third statement is dubious or misleading given the incorrect second statement.

When a new object is created, it is NOT set to `null`. It's an object. Plain and simple. If you meant that when a new variable is created, but before it's given a value, it's first set to `undefined`, not `null`. But this phrase is just totally wrong. The second `null` is NOT treated as an object. I'm not sure what that even is referring to honestly. But it's patently false. `null` is not an object, and never will be. It's a well known quirk of JavaScript that `typeof null === "object"` but that doesn't mean `null` is an object. Plain and simple: it's `null`, and only `null`. That's it.

The correct explanation for this question/answer is that the `var foo` will result in `foo` being `undefined`, and `undefined == null` but NOT `undefined === null`. This is because the `==` in the first expression allows coercion to treat `null` and `undefined` as the same value. But the `===` check fails because they are NOT actually the same type.

<img src="http://gyazo.com/606cf0fc16778c3e9933ebf52f4c3410">

Again, correct answer chosen, wrong explanation for that being the correct answer. `null` is NOT an object. It's a special empty value. The fact that JavaScript lies (unfortunately) with `typeof null === "object"` is sad and misleading, but it's still incorrect.

The correct explanation for this was just given above: coercion makes `null` and `undefined` be treated as the same value and `==` allows coercion to happen.

# Totally Incorrect Answers

<img src="http://gyazo.com/4c3726bc7707ebb3e36a1f1517bf181a.png">

The answer "Creates a global variable" is the one and only correct answer to this question. Why? Because that's exactly how JavaScript works, variables that are implicitly declared (that is, assigned a value without a prior explicit declaration with `var`) and declared automatically in the global scope.

