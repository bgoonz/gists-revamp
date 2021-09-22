package main

import (
  "fmt"
  "http"
  "strings"
)

func handler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Hi there, I love %s!\n", r.URL.Path[1:])
}

func redirect(w http.ResponseWriter, r *http.Request) {
  s := []string{r.FormValue("url"), "?cheese=ham"};
  http.Redirect(w, r, strings.Join(s, ""), http.StatusFound)
}

func main() {
  http.HandleFunc("/", handler)
  http.HandleFunc("/r", redirect)
  http.ListenAndServe(":8080", nil)
}