<?php

return array(
    'name' => 'Back Image Review',
    'description' => /*_wp*/('Preview images in the store admin panel in the management of the goods'),
    'version'=>'1.0.0',
    'vendor' => 1010465,
    'img' => 'img/backimageview.png',
    'shop_settings' => false,
    'handlers' => array(
        'backend_products' => 'backendProducts',
    )
);