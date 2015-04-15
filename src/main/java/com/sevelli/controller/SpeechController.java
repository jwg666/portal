package com.sevelli.controller;

import com.iflytek.cloud.speech.*;
import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by sevelli on 15-3-23.
 */
@Controller
@RequestMapping("/speech")
public class SpeechController extends  BaseController{
    @RequestMapping("convert")
    public ResponseEntity<byte[]> convert() throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("attachment", "1.mp3");

        return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(new File("/home/sevelli/Music/1.mp3")),headers, HttpStatus.CREATED);
    }

    @RequestMapping("tts")
    @ResponseBody
    public Map tts(String text){

//        SpeechUtility.createUtility(context, SpeechConstant.APPID + "=12345678");
        //        /1.创建 SpeechSynthesizer 对象
        SpeechSynthesizer mTts= SpeechSynthesizer.createSynthesizer( );
        //2.合成参数设置,详见《iFlytek MSC Reference Manual》SpeechSynthesizer 类
        mTts.setParameter(SpeechConstant.VOICE_NAME, "xiaoyan");//设置发音人
        mTts.setParameter(SpeechConstant.SPEED, "50");//设置语速
        mTts.setParameter(SpeechConstant.VOLUME, "80");//设置音量,范围 0~100
        //设置合成音频保存位置(可自定义保存位置),保存在“./iflytek.pcm”
        //如果不需要保存合成音频,注释该行代码
        mTts.setParameter(SpeechConstant.TTS_AUDIO_PATH, "/home/sevelli/iflytek.pcm");
        //3.开始合成
        mTts.startSpeaking("科大讯飞,让世界聆听我们的声音", mSynListener);
        String uri = "";
        mTts.synthesizeToUri("科大讯飞,让世界聆听我们的声音",uri,uriListener);
        logger.debug(uri);
        Map map = new HashMap();
        map.put("tts","ooooooooo");
        return map;
    }


    private SynthesizeToUriListener uriListener = new SynthesizeToUriListener(){

        @Override
        public void onBufferProgress(int i) {

        }

        @Override
        public void onSynthesizeCompleted(String s, SpeechError speechError) {

        }
    };

    //合成监听器
    private SynthesizerListener mSynListener = new SynthesizerListener(){
        //会话结束回调接口,没有错误时,error为null
        public void onCompleted(SpeechError error) {

        }
        //缓冲进度回调
        //percent为缓冲进度0~100, beginPos为缓冲音频在文本中开始位置, endPos表示缓冲音频在文本中结束位置,info为附加信息。
        public void onBufferProgress(int percent, int beginPos, int endPos, String info) {}
        //开始播放
        public void onSpeakBegin() {}
        //暂停播放
        public void onSpeakPaused() {}
        //播放进度回调
        //percent为播放进度0~100,beginPos为播放音频在文本中开始位置,endPos表示播放音频在文本中结束位置.
        public void onSpeakProgress(int percent, int beginPos, int endPos) {}
        //恢复播放回调接口
        public void onSpeakResumed() {}
    };
}
