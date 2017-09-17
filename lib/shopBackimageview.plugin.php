<?php

class shopBackimageviewPlugin extends shopPlugin
{
    public function backendProducts()
    {
        $result['toolbar_section'] = '';
        $js_path = $this->getPluginPath('js');
        $result['toolbar_section'] .= '<script src="'.$js_path.'backimageview.js"></script>';
        $css_path = $this->getPluginPath('css');
        $result['toolbar_section'] .= '<link rel="stylesheet" href="'.$css_path.'backimageview.css" type="text/css">';
        return $result;
    }

    public static function getPluginPath($variant, $filename = '') {
               
        $path = 'plugins/backimageview/';
        
        if($variant === 'js') {
            return wa()->getAppStaticUrl('shop').$path.'js/'; 
        }
        
        if($variant === 'css') {
            return wa()->getAppStaticUrl('shop').$path.'css/'; 
        }
        
        if(empty($variant) || !isset($variant)) {
            return wa()->getAppPath($path, 'shop');
        }
    }  
}