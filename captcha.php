<?php
/* Google's testing key: */
// $key = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe';
/* Real key: */
$key = file_get_contents('/opt/bitnami/apache2/pwd/recaptcha.key');

$val = json_decode(file_get_contents('php://input'), true)['captcha'];
$url = 'https://www.google.com/recaptcha/api/siteverify';
$parcel = http_build_query([
  'secret' => $key,
  'response' => $val
]);

$cp = curl_init();

curl_setopt($cp, CURLOPT_URL, $url);
curl_setopt($cp, CURLOPT_POST, true);
curl_setopt($cp, CURLOPT_POSTFIELDS, $parcel);
curl_setopt($cp, CURLOPT_RETURNTRANSFER, true);

$results = curl_exec($cp);
$results = json_decode($results, true);

if ($results['success'] == true) {
  echo file_get_contents('/opt/bitnami/apache2/pwd/resume-references.json');
} else {
  echo json_encode(false);
}
?>