<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<style type="text/css">
body{
background:#8D8D8D;
}
table{
border:3px solid red;
margin-top:20px;
margin-left:150px;
margin-right:150px;
}
th{
background:yellow;
}
tr:nth-child(even) {background: #CCC}
tr:nth-child(odd) {background: #FFF}
h1{
margin-left:200px;
margin-top:40px;
color:#2621DE;
font-size:65px;
}
</style>
</head>
<body>
<h1><i>RSS</i></h1>
<table>
	<tr>
		<th>Title</th>
		<th>Link</th>
		<th>Description</th>
	</tr>
	<xsl:for-each select="rss/channel/item">
	<tr>
		<td><xsl:value-of select="title"/></td>
		<td>
			<xsl:variable name="itemURL">
				<xsl:value-of select="link"/>
			</xsl:variable>
			<a href="{$itemURL}">
				<xsl:value-of select="link"/>
			</a>
		</td>
		<td><xsl:value-of select="description"/></td>
	</tr>
	</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>