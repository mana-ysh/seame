FROM docker.elastic.co/elasticsearch/elasticsearch:7.17.0

RUN apt-get update && \
    apt-get install -y jq

ENV PATH /usr/share/elasticsearch/bin:$PATH

USER elasticsearch

COPY config/ /usr/share/elasticsearch/config/

RUN elasticsearch-plugin install repository-gcs --batch \
    && elasticsearch-plugin install analysis-kuromoji \
    && elasticsearch-plugin install analysis-icu
