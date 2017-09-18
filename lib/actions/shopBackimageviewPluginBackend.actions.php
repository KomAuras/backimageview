<?php

class shopBackimageviewPluginBackendActions extends waJsonActions
{
    /**
     *  Сохраняем настройки плагина
     */
    public function saveSettingsAction()
    {
        //waLog::log("", 'debug.log');
        try {
            $post = warequest::post('settings');

            $settings = array(
                'enabled' => isset($post['enabled']) ? 1 : 0,
                'state' => isset($post['state']) ? 1 : 0,
                'width' => $post['width'],
            );

            wa()->getplugin('backimageview')->savesettings($settings);
            $this->response = array('msg' => _wp('Saved'));

        } catch (Exception $e) {
            $this->setError($e->getMessage());
        }
    }
}
