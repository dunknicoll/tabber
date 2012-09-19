Forked from Greg McAusland's jQuery version - http://github.com/gregmcausland/tabber

tabber - Mootools version
=========================
In an effort to not rewrite tab code every single project i seem to engage in, here's a small fairly tight reusable tabbing class. Not user friendly in terms of error checking, if the markup is correct it wont fail.

Usage:

1) Link your href to the id of the tab, like you would an on page anchor.

2) Call the script passing the selector of your a links:
   new ADTabber( '#tabs a' )

3) dont forget to include jquery.
