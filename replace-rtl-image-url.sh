SEARCH="url(..\/"
REPLACE="url(..\/..\/"

sed -i "s/$SEARCH/$REPLACE/g" ./dist/*.rtl/*.css
