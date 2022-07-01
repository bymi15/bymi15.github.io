build:
		mkdir	-p functions
		GOBIN=${PWD}/functions go install ./functions/...
		npm install --no-audit
		npm run build