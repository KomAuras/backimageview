<?php

class shopBackimageviewPlugin extends shopPlugin
{
    public function backendProducts()
    {
        $view = wa()->getView();
        $view->assign('js_path', $this->getPluginPath('js'));
        $view->assign('css_path', $this->getPluginPath('css'));
        $view->assign('plugin_version', $this->getVersion());
        $view->assign('state', wa('shop')->getPlugin('backimageview')->getSettings('state'));

        return array(
            'toolbar_section' => $view->fetch($this->path.'/templates/Toolbar.html')
        );

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