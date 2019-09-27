function wxAutoImageCal(e) {
		//当图片载入完毕时触发event.detail = {height, width}
    var originalWidth = e.detail.width;
    var originalHeight = e.detail.height;
    var windowWidth = 0;
    var windowHeight = 0;
    var autoWidth = 0;
    var autoHeight = 0;
    var results = {};
    wx.getSystemInfo({
      success: function(res) {
        // success
				//获取窗口宽度和高度		
        var winWidth = res.windowWidth;
        var winHeight = res.windowHeight;
				//当图片宽度大于窗口宽度
        if(originalWidth > winWidth){
            autoWidth = winWidth - 20;
            autoHeight = (autoWidth * originalHeight) / originalWidth;
						//将计算后的结果添加进results
            results.imageWidth = autoWidth + 'px';
            results.imageHeight = autoHeight + 'px'; 
        }
        else{
            results.imageWidth = originalWidth + 'px';
            results.imageHeight = originalHeight + 'px';
        }
      }
    })
    return results;
}
module.exports.wxAutoImageCal = wxAutoImageCal