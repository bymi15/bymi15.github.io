package main

import (
	"fmt"
	"net/http"

	"github.com/bymi15/bymi15.github.io/functions/src/utils"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World")
}

func main() {
	utils.ServeFunction("/api/helloworld", handler)
}
