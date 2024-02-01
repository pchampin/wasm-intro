EXAMPLES=$(shell ls -d example*)

.PHONY: all
compile-all:
	set -e; for i in $(EXAMPLES); do make compile -C "$$i"; done

.PHONY: clean-all
clean-all:
	for i in $(EXAMPLES); do make clean -C "$$i"; done

.PHONY: check-js
check-js:
	jshint -c jshint-config.json */*.js

.PHONY: serve
serve: compile-all check-js
	python3 -m http.server 8080 --bind 0.0.0.0
