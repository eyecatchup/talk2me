app.controller('mainController', [
    '$scope',
    '$rootScope',
    function($scope, $rootScope) {
        var Say = function(string, lang) {({
            $audio: !1,
            createAudioElem: function(e) {
                var b = document.createElement("audio");
                b.setAttribute("autoplay", "");
                b.setAttribute("name", "tts");
                b.setAttribute("src", e);
                b.setAttribute("type", "audio/mpeg");
                document.body.appendChild(b);
                this.$audio = !0;
            },
            setSrc: function(e) {
                var b = document.querySelector('audio[name="tts"]');
                b.setAttribute("src", e);
                b.play();
            },
            getTokenizedTtsUrl: function(l,k){
                k=k?k:"en";var p="/translate_tts?ie=UTF-8&q="+encodeURIComponent(l)+"&tl="+k+"&total=1&idx=0&textlen="+l.length,m=function(a){return function(){return a}},n=function(a,g){for(var c=0;c<g.length-2;c+=3){var b=g.charAt(c+2),b="a"<=b?b.charCodeAt(0)-87:Number(b),b="+"==g.charAt(c+1)?a>>>b:a<<b;a="+"==g.charAt(c)?a+b&4294967295:a^b}return a},q=function(a){var g="416234.2030088909",c=m(String.fromCharCode(116));d=m(String.fromCharCode(107));c=[c(),c()];c[1]=d();d="&"+
                c.join("")+"=";for(var c=g.split("."),g=Number(c[0])||0,b=[],f=0,h=0;h<a.length;h++){var e=a.charCodeAt(h);128>e?b[f++]=e:(2048>e?b[f++]=e>>6|192:(55296==(e&64512)&&h+1<a.length&&56320==(a.charCodeAt(h+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++h)&1023),b[f++]=e>>18|240,b[f++]=e>>12&63|128):b[f++]=e>>12|224,b[f++]=e>>6&63|128),b[f++]=e&63|128)}a=g;for(f=0;f<b.length;f++)a+=b[f],a=n(a,"+-a^+6");a=n(a,"+-3^+b+-f");a^=Number(c[1])||0;0>a&&(a=(a&2147483647)+2147483648);a%=1E6;return d+(a.toString()+"."+(a^g))}(l);return"https://translate.google.com"+p+q+"&client=t&prev=input"
            },
            play: function(e, b) {
                var k = this.getTokenizedTtsUrl(e, b);
                !1 === this.$audio && document.createElement("audio").canPlayType("audio/mpeg") ? this.createAudioElem(k) : !0 === this.$audio && this.setSrc(k);
            }
        }).play(string, lang)};

        $scope.langCode = 'de';
        $scope.title = 'Hello world';

        $scope.words = {};

        $scope.words.colors = {
            red: {
                de: 'rot',
                en: 'red'
            },
            green: {
                de: 'grün',
                en: 'green'
            },
            black: {
                de: 'schwarz',
                en: 'black'
            }
        };

        $scope.speak = function(word, event) {
            event.preventDefault();
            if (word[$scope.langCode]) {
                Say(word[$scope.langCode], $scope.langCode);
            }
        }
    }
]);
