package main

import "fmt"

type Node struct {
	Value     string
	Childrens map[string]*Node
}

type Trie struct {
	Root *Node
}

func (t *Trie) Insert(word string) {
	node := t.Root
	for _, v := range word {
		c := string(v)
		if cn, ok := node.Childrens[c]; ok {
			node = cn
		} else {
			newNode := NewNode(c)
			node.Childrens[c] = newNode
			node = newNode
		}
	}
}

func NewNode(v string) *Node {
	return &Node{Value: v, Childrens: make(map[string]*Node)}
}

func NewTrie() *Trie {
	return &Trie{NewNode("")}
}

func printNode(n *Node, level int) {
	for k, v := range n.Childrens {
		for i := 0; i < level; i++ {
			fmt.Printf("-")
		}
		fmt.Printf("KEY: %s\n", k)
		printNode(v, level+1)
	}
}

func main() {
	t := NewTrie()
	t.Insert("car")
	t.Insert("cute")
	t.Insert("to")
	t.Insert("bob")

	printNode(t.Root, 0)
}
