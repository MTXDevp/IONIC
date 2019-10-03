<?php

namespace MyApp;

require dirname(__DIR__) . '/vendor/autoload.php';

class funcionaVani{
  //mobiletokens sera un array se quieres mandar varias notificaciones simultaneas
  function __construct(string $mobileTokens, string $titulo, string $contenido) {

      print($mobileTokens);

      $api_key = 'AAAAW7_Ke74:APA91bE7bRXlJwTHah1uCVpl-89V1hsofK_jIl4qW17tAGvxqmm6erARdw0XCU_JqlCbJUiEM-N79yuMou5ZdEpro8TS0PPDceRny9U91qnKoSaBAzD4lpoVcdbZsGh-4PlDHFFRz_63';
      //API URL of FCM
      $url = 'https://fcm.googleapis.com/fcm/send';

      $header = array(
        'Content-Type:application/json',
        'Authorization:key='.$api_key);

        $fields = array(
          'registration_ids' => array($mobileTokens),
          'data' => array(
            'title' => $titulo,
            'body' => $contenido,
            'vibrate' => 1,
            'sound' => 1,
            "click_action"=>"FCM_PLUGIN_ACTIVITY")
        );

        $ch= curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);

        if ($result === FALSE) {

          die('Se ha producido un error: ' . curl_error($ch));

        }else{

          print("---------------------------->");
          print("Mensaje enviado con éxito!!!");
        }
          curl_close($ch);
          return $result;
      }
    }
