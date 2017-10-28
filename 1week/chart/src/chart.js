function Chart(containerId, config) { // 생성자 함수인지 그냥 함수인지 모르기때문에 첫문자를 대문자로 만듬
    this.containerEl = document.getElementById(containerId); //문서객체를 가져옮
    this.canvas = document.createElement('canvas');          //캔버스를 만듬
    this.ctx = this.canvas.getContext('2d');                 //2d캔버스의 컨텍스트를가져옮
    this.containerEl.appendChild(this.canvas);               //section 밑에 캔버를 넣음

    if(!config.options) config.options = {};                //옵션이 없다면 초기화
    this.options = {                                        //옵션이 있다면 장입 없다면 200으로세팅
        width : config.options.width || 200,
        height : config.options.height || 200
    };

    this.canvas.width = config.options.width;               //값 장입
    this.canvas.height = config.options.height;
}

Chart.prototype.drawRect = function (x, y, width, height, opts) {   //프로토타입 선언
    if(!opts) opts = {};
    this.ctx.beginPath();
    this.ctx.lineWidth = opts.lineWidth;
    this.ctx.strokeStyle = opts.strokeStyle;
    this.ctx.borderColor = opts.borderColor;
    this.ctx.rect(x,y,width,height);
    this.ctx.stroke();
    if(opts.backgroundColor){
        this.ctx.fillStyle = opts.backgroundColor;
        this.ctx.fillRect(x,y,width,height);
    }
};

Chart.prototype.drawText =
    function (text,x,y,options) {
        if(!options) options = {};
        this.ctx.font = options.font;
        this.ctx.textAlign = options.textAlign || 'center';
        this.ctx.fillStyle = options.fillStyle || '#000000';
        this.ctx.fillText(text,x,y);
    };