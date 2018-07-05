<?php
if(isset($_GET['id'])){
$id = $_GET['id'];
if($id=="stop"){
	exec("killall mplayer");
}elseif($id=="kushiro"){
	exec("killall mplayer");
	exec("mplayer -playlist http://www.simulradio.info/asx/FmKushiro.asx > /dev/null &");
}elseif($id=="tukuba"){
	exec("killall mplayer");
	exec("mplayer -playlist http://www.simulradio.info/asx/tsukuba.asx > /dev/null &");
}else{
	exec("killall mplayer");
	exec("mplayer -playlist http://yp.shoutcast.com/sbin/tunein-station.pls?id=" .$id. " > /dev/null &");
}
}
?>
<html>
<head>
  <meta name="viewport" content="width=device-width">
</head>
<body>
  <p><a href="mplayer.php?id=stop">stop</a></p>
  <ul>
    <li><a href="mplayer.php?id=36307">SHOUTcast 181.fm - The Mix Channel 70s, 80s, 90 (128k/MP3)</a></li>
    <li><a href="mplayer.php?id=367053">SHOUTcast 181.FM - Energy 98 - Dance Hits     (48k/AAC)</a></li>
    <li><a href="mplayer.php?id=1645258">SHOUTcast Radio-im-Internet.de (192k/MP3)    Adult Alternative</a></li>
    <li><a href="mplayer.php?id=625379">SHOUTcast 1.FM - Dance One Radio (64k/ACC)</a></li>
    <li><a href="mplayer.php?id=9495227">SHOUTcast Japan-A-Radio - Japan's best music mix! (128k/mp3)</a></li>
  </ul>
  <ul>
    <li><a href="mplayer.php?id=kushiro">simulradio FM くしろ </a></li>
    <li><a href="mplayer.php?id=tukuba">simulradio FM つくば</a></li>
  </ul>
</body>
</html>
