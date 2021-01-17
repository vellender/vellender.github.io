var d=0;
        const callback = () => {
                    //Cs
                    console.log(d);
                    if (d==0||d==10||d==40||d==80||d==90||d==120||d==160||d==200||d==240||d==280){
                    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
                    const now = Tone.now();
                    synth.triggerAttackRelease("C4", "8n", now)};
                                        
                    //Bs
                    if (d==30||d==110){
                    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
                    const now = Tone.now();
                    synth.triggerAttackRelease("B3", "8n", now)};
                                       
                    //As
                    if (d==20||d==100||d==260){
                    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
                    const now = Tone.now();
                    synth.triggerAttackRelease("A3", "8n", now)};
                                        
                    //Gs
                    if (d==60||d==70||d==140||d==150||d==180||d==190||d==220||d==230){
                    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
                    const now = Tone.now();
                    synth.triggerAttackRelease("G3", "8n", now)};
                    
                    
                    $('#grid').css({"-webkit-transform": "rotate("+d*36/32+"deg)",
                                            "-moz-transform": "rotate("+d*36/32+"deg)",
                                            "transform": "rotate(-"+d*36/32+"deg)"});
                    
                                      
                    if (d==319){d=0;} else {d++};
                    };
        
        $('#r').click(async () => {
            await Tone.start()
            console.log('audio is ready')
            var anim=setInterval(callback,40);
        });
        
