#!/bin/sh

# CSS
find -name "*.css" -not -path "./*.rtl/*" | xargs cp -t ../../Merkava_hybris/mainrepo/hybris/bin/custom/ilg/ilgstorefront/web/webroot/_ui/responsive/common/css
find -path "*.rtl/*.css" | xargs cp -t ../../Merkava_hybris/mainrepo/hybris/bin/custom/ilg/ilgstorefront/web/webroot/_ui/responsive/common/css/ltr

# JS
find -name "*.js" | xargs cp -t ../../Merkava_hybris/mainrepo/hybris/bin/custom/ilg/ilgstorefront/web/webroot/_ui/responsive/common/js
