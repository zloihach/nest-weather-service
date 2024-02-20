FROM ubuntu:latest
LABEL authors="FSB-PC"

ENTRYPOINT ["top", "-b"]
