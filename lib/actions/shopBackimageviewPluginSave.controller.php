<?php
class shopBackimageviewPluginSaveController extends waJsonController
{
    protected $state;

    public function execute()
    {
        $this->state = waRequest::post('state');
        if ($this->state === null) {
            return;
        }
        //waLog::log($this->state, 'debug.log');
        if ($this->state == 1) {
            $this->state = 0;
            $result['text'] = '<i class="icon16 status-gray"></i>'._wp('Disabled').'</a>';
        } else {
            $this->state = 1;
            $result['text'] = '<i class="icon16 status-green"></i>'._wp('Enabled').'</a>';
        }
        wa('shop')->getplugin('backimageview')->savesettings(array('state'=>$this->state));
        $result['state'] = $this->state;
        $this->response = $result;
    }
}