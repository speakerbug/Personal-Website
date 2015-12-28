<?php

if ("$_POST[body]"=="" && "$_POST[name]" != "SkethyPatty") {

 $to = "henry@henrysaniuk.com";
 $subject = "New Message From HenrySaniuk.com";
 $body = "From: $_POST[name]\n\nEmail: $_POST[email]\n\nMessage:\n\n$_POST[message]";
 if (mail($to, $subject, $body)) {
   echo("<p><big><big><center>Your email has been successfully sent! You should receive a reply within a few days. Thank you for your message.</p>");
  } else {
   echo("<p><big><big><center>Hmmm...It seems that the email you wrote could not be delivered. Try emailing Henry directly using the email Henry@HenrySaniuk.com</p>");
}


}
else {

 echo("<p><big><big><center>Your email has been successfully sent! You should receive a reply within a few days. Thank you for your message.</p>");

}
 ?>