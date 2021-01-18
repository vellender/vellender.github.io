var d=0;
const play = (note) => {const synth = new Tone.PolySynth(Tone.Synth).toDestination();const now = Tone.now();synth.triggerAttackRelease(note, "8n", now)}
const callback = () => {if (d==0||d==10||d==40||d==80||d==90||d==120||d==160||d==200||d==240||d==280){play("C4");};
                        if (d==30||d==110){play("B3");};
                        if (d==20||d==100||d==260){play("A3");};
                        if (d==60||d==70||d==140||d==150||d==180||d==190||d==220||d==230){play("G3");};                       
                        $('#grid').css({"-webkit-transform": "rotate("+d*36/32+"deg)","-moz-transform": "rotate("+d*36/32+"deg)","transform": "rotate(-"+d*36/32+"deg)"});
                        if (d==319){d=0;} else {d++;};};       
$('#r').click(async () => {
    await Tone.start()
    console.log('audio is ready')
    var anim=setInterval(callback,40);
});
        
