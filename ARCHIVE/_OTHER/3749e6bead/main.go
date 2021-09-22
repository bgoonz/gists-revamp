package main

import (
	"fmt"
	"reflect"
)

type sA struct {
	foo int
	bar string
}

type sB struct {
	foo int
	bar string
}

func main() {
	a := sA{1, "hello"}
	b := sB{2, "world"}

	fmt.Println(intValue(a, "foo"), intValue(b, "foo"))
	fmt.Println(strValue(a, "bar"), strValue(b, "bar"))
}

func strValue(s interface{}, fieldName string) string {
	r := reflect.ValueOf(s)
	f := reflect.Indirect(r).FieldByName(fieldName)
	return f.String()
}

func intValue(s interface{}, fieldName string) int64 {
	r := reflect.ValueOf(s)
	f := reflect.Indirect(r).FieldByName(fieldName)
	return f.Int()
}
