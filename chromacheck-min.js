/**
 * ChromaCheck 1.13
 * @author Roel Nieskens, https://pixelambacht.nl
 * MIT license
 */
!function(){function A(){if(o.drawImage(w,0,0),255===o.getImageData(10,90,1,1).data[1])return clearInterval(B),function(){var A={};A.cbdt=100===o.getImageData(10,10,1,1).data[0],A.colr=200===o.getImageData(10,30,1,1).data[0],A.sbix=150===o.getImageData(10,50,1,1).data[0],A.svg=50===o.getImageData(10,70,1,1).data[0];for(var g in A)A.hasOwnProperty(g)&&(a.className+=A[g]?" "+t+g:"")}(),!0;--Y<=0&&(clearInterval(B),g())}function g(){a.className+=" "+t+"failed"}var B,a=document.documentElement,t="chromacheck-",Y=20;try{var e=document.createElement("canvas"),o=e.getContext("2d"),w=new Image;e.width=20,e.height=100,w.onload=function(){A()||(B=window.setInterval(A,1))},w.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="100" style="background:#fff;fill:#0f0;"><style type="text/css">@font-face{font-family:"chromacheck-cbdt";src:url(data:application/x-font-woff;base64,d09GRgABAAAAAALkAAwAAAAAAxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDQkRUAAACVAAAAGAAAABlKWauy0NCTEMAAAK0AAAALQAAAFDwVcDTT1MvMgAAAYAAAAA6AAAAYBf0J01jbWFwAAABxAAAACcAAAAsAAzpNmdseWYAAAH0AAAAGgAAABoNIh0kaGVhZAAAARwAAAAvAAAANgxLx0hoaGVhAAABTAAAABUAAAAkCAEEAmhtdHgAAAG8AAAABgAAAAYEAAAAbG9jYQAAAewAAAAGAAAABgANAABtYXhwAAABZAAAABsAAAAgAg4AHW5hbWUAAAIQAAAAOAAAAD4C3AsWcG9zdAAAAkgAAAAMAAAAIAADAAB4AWNgZGAA4bSjsh/j+W2+MkizMIDApQVMAiD6Wm2DNYhmYQCLczAwgSgAAJIHngB4AWNgZGBgYQACOAkUQQWMAAGRABAAAAB4AWNgZGBgYGJgAdMMUJILJMQgAWICAAH3AC4AeAFjYGFhYJzAwMrAwDST6QwDA0M/hGZ8zWDMyMmAChgFkDgKQMBw4CXzS2YWMB9IogMFBgYAAI4IegAABAAAAAAAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoRA/kvm//8hpNg/sDwDAFyDBygAAAAAAAANAAAAAQAAAAAEAAQAAAMAABEhESEEAPwABAD8AAAAeAFjYGBgYpBjYGZgZOFkYGRQAPIhbCYw25khg6GIIZ8hlyERzE5lSGbIZlAAsp0YXBhCAHWIBft4AWNgZsALAAB9AAR4AWNgYmAICAAhBoaIzgA/d14uKS4gm9fTwyUISAeAMCMzkNxyP+EdkGIO8AlxTWFgeLEkTg3IFfB0cQypYExeIC3BujhBBChfwMB4Z+L7yQxA4Onq57LOKaEJAK3VFft4AWNgYgABRiC2AGIJKJshAAhhAMEGyzIGBCgASbA6DiApCKRZoLKJAGrOAtkAAAA=) format("woff");}@font-face{font-family:"chromacheck-colr";src:url(data:application/x-font-woff;base64,d09GRgABAAAAAAKAAAwAAAAAAowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDT0xSAAACVAAAABYAAAAYAAIAJUNQQUwAAAJsAAAAEgAAABLJAAAQT1MvMgAAAYAAAAA6AAAAYBfxJ0pjbWFwAAABxAAAACcAAAAsAAzpM2dseWYAAAH0AAAAGgAAABoNIh0kaGVhZAAAARwAAAAvAAAANgxLumdoaGVhAAABTAAAABUAAAAkCAEEAmhtdHgAAAG8AAAABgAAAAYEAAAAbG9jYQAAAewAAAAGAAAABgANAABtYXhwAAABZAAAABsAAAAgAg4AHW5hbWUAAAIQAAAAOAAAAD4C5wsecG9zdAAAAkgAAAAMAAAAIAADAAB4AWNgZGAAYQ5+qdB4fpuvDNIsDCBwaQGTAIi+VlscBaJZGMDiHAxMIAoAtjIF/QB4AWNgZGBgYQACOAkUQQWMAAGRABAAAAB4AWNgZGBgYGJgAdMMUJILJMQgAWICAAH3AC4AeAFjYGFhYJzAwMrAwDST6QwDA0M/hGZ8zWDMyMmAChgFkDgKQMBw4CXDSwYWEBdIYgAFBgYA/8sIdAAABAAAAAAAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoRA/kuG//8hpDgjWJ4BAFVMBiYAAAAAAAANAAAAAQAAAAAEAAQAAAMAABEhESEEAPwABAD8AAAAeAEtxgUNgAAAAMHHIQTShTlOAty9/4bf7AARCwlBNhBw4L/43qXjYGUmf19TMuLcj/BJL3XfBg54AWNgZsALAAB9AAR4AWNgYGAEYj4gFgGygGwICQACOwAoAAAAAAABAAEAAQAAAA4AAAAAyP8AAA==) format("woff");}@font-face{font-family:"chromacheck-sbix";src:url(data:application/x-font-woff;base64,d09GRgABAAAAAALoAAsAAAAAA2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABbAAAADoAAABgF/InS2NtYXAAAAGwAAAAJwAAACwADOk0Z2x5ZgAAAeAAAAAaAAAAGg0iHSRoZWFkAAABCAAAAC8AAAA2DEvHU2hoZWEAAAE4AAAAFQAAACQIAQQCaG10eAAAAagAAAAGAAAABgQAAABsb2NhAAAB2AAAAAYAAAAGAA0AAG1heHAAAAFQAAAAGwAAACACDgAdbmFtZQAAAfwAAABDAAAATgSgDQdwb3N0AAACQAAAAAwAAAAgAAMAAHNiaXgAAAJMAAAAnAAAAQQlRrDFeAFjYGRgAOF4/4O34/ltvjJIszCAwKUFTAIg+lptgxuIZmEAi3MwMIEoAAPhB7oAeAFjYGRgYGEAAjgJFEEFjAABkQAQAAAAeAFjYGRgYGBiYAHTDFCSCyTEIAFiAgAB9wAuAHgBY2BhYWCcwMDKwMA0k+kMAwNDP4RmfM1gzMjJgAoYBZA4CkDAcOAl40tGFjAfSKIDBQYGAAAWCHYAAAQAAAAAAAAAeAFjYGBgZGAGYgYGHgYWBgUgzQKEQP5Lxv//IaQ4SA0QAABVYQYnAAAAAAAADQAAAAEAAAAABAAEAAADAAARIREhBAD8AAQA/AAAAHgBLcZVAYMAAEDBN0NCIBGIgBQgAu7u7dF93QFvVD68vjIvDPj/fd8lZyOmwqImwCckY0LHOR1oqfHvx4SUBwCGCbAAeAFjYGbACwAAfQAEeAFjYARCBjDmYdRh8ADSAlD8gwEICvLSFToD/Nx5uaS4gFxeTw+XIKByHRDmYAaK+C2ucwdSkiWuESXB+Wkl5YlFqQyOKflJqQqeuYnpqUGpiSmVhSdTbYCK2AJ8QlynMYBAXoTPRJDxni6OIRW33hxkBLmgSeH/+jwPByCTFuBDHhMPQ8JpBkaLaVUiIAFPVz+XdU4JTQA7YCbF) format("woff");}@font-face{font-family:"chromacheck-svg";src:url(data:application/x-font-woff;base64,d09GRgABAAAAAAMMAAsAAAAAA3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABcAAAADoAAABgF/MnTlNWRyAAAAJQAAAAvAAAAQ/LNyCYY21hcAAAAbQAAAAtAAAANOkY6T1nbHlmAAAB7AAAAB4AAAA0KkgqRmhlYWQAAAEIAAAALwAAADYMS8staGhlYQAAATgAAAAVAAAAJAgBBAJobXR4AAABrAAAAAgAAAAIBAAAAGxvY2EAAAHkAAAACAAAAAgADQAabWF4cAAAAVAAAAAdAAAAIAIPAB1uYW1lAAACDAAAADcAAAA8ApwLJXBvc3QAAAJEAAAADAAAACAAAwAAeAFjYGRgAGFtqafL4vltvjJIszCAwKUFTAIg+lptiwKIZmEAi3MwMIEoAOvwBx4AeAFjYGRgYGEAAjgJFEEFjAABkQAQAAAAeAFjYGRgYGBmYAHTDFCSi4GBiYFBAsQEAAISAC8AAAB4AWNgYWFgnMDAysDANJPpDAMDQz+EZnzNYMzIyYAKGAWQOApAwHDgJdNLoAkgACTRgQIDAwAAjAh6AAAEAAAAAAAAAHgBJcU5AYBADACw3NeJuRrw76oi+MkSNEPDZtoRpqZXr3ld/OeVpwbcs+wKIQAAAAAAAAAADQAaeAFjYGQAAhYgZGBmYBBUFFRkYfjDAMK4ZQBZhAThAAB4AWNgYGBikGNgZmBk4WRgBLIYoGwmMNuZIYOhiCGfIZchEcxOZUhmyGZQYAhmCGNwBwBp2QXKAHgBY2BmwAsAAH0ABHgBTQ81VgNBFEr0DP/FfUdwmKSjChVOlWTd3U5Oywj23WVPwKGU+wK5PuX8ebdqwgAqM8vdOGIdvEAdMCM9NtzIZp3np/v5VWe1PAQJd3llA6+PctZxiiK50bS6rhc1XcSZrRGEkMYrOuAarGMHbeLgzk8rb7ahyLZRbsVZyDq5vg3MEZ7N8fhfDa9KtoUDlhsErNOlBHHoAB/3gAAjcgZrIf+bCNZICeH+6o8OaP92a/bvD+LE5RfyYz6O) format("woff");}</style><text x="0" y="0" font-size="20"><tspan font-family="chromacheck-cbdt" x="0" dy="20">&#xe903;</tspan><tspan font-family="chromacheck-colr" x="0" dy="20">&#xe900;</tspan><tspan font-family="chromacheck-sbix" x="0" dy="20">&#xe901;</tspan><tspan font-family="chromacheck-svg" x="0" dy="20">&#xe902;</tspan><tspan font-family="chromacheck-svg" x="0" dy="20">&#xe904;</tspan></text></svg>')}catch(A){g()}}();