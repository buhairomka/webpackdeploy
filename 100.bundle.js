(self.webpackChunk_5=self.webpackChunk_5||[]).push([[100],{617:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=function(e,t=null,n=null,l=null,o=null){let r=document.createElement(e);if(n&&n.split(" ").forEach((e=>{r.classList.add(e)})),t&&(r.innerHTML=t),o&&(r.id=o),l)for(let e in l)r.setAttribute(e,l[e]);return r.outerHTML}},100:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var l=n(617);const o=function(e){let t=document.querySelector("main .container");document.querySelector("header").innerHTML="",fetch("https://server-for-okr.herokuapp.com/").then((e=>(console.log(e),e.json()))).then((n=>{let o=e.split("_")[1];console.log("сюда нам надо",o);for(let e in n)n[e].forEach((e=>{e.id==o&&(t.innerHTML=(0,l.Z)("div",(0,l.Z)("img",null,null,{src:e.img})+(0,l.Z)("div",(0,l.Z)("h3",e.model)+(0,l.Z)("p",e.description)+(0,l.Z)("button","To Cart "+e.price,"addbutton",null,o),"content"),"content_wrapper"))}))}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly81Ly4vdmlld3MvY3JlYXRvci5qcyIsIndlYnBhY2s6Ly81Ly4vdmlld3MvcHJvZHVjdHMudmlldy5qcyJdLCJuYW1lcyI6WyJ0YWciLCJjb250ZW50Iiwic2V0X2NsYXNzIiwic2V0X2F0dHIiLCJzZXRpZCIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3BsaXQiLCJmb3JFYWNoIiwiY2xhc3NuYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiaWQiLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJvdXRlckhUTUwiLCJ2aWV3TmFtZSIsIm1haW4iLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImRhdGEiLCJpdGVtaWQiLCJwcm9kdWN0Il0sIm1hcHBpbmdzIjoidUdBdUJBLFFBckJBLFNBQW9CQSxFQUFLQyxFQUFVLEtBQU1DLEVBQVksS0FBTUMsRUFBVyxLQUFNQyxFQUFRLE1BQ2hGLElBQUlDLEVBQUtDLFNBQVNDLGNBQWNQLEdBYWhDLEdBWklFLEdBQ1dBLEVBQVVNLE1BQU0sS0FDdEJDLFNBQVNDLElBQ1ZMLEVBQUdNLFVBQVVDLElBQUlGLE1BR3JCVCxJQUNBSSxFQUFHUSxVQUFZWixHQUVmRyxJQUNBQyxFQUFHUyxHQUFLVixHQUVSRCxFQUNBLElBQUssSUFBSVksS0FBT1osRUFDWkUsRUFBR1csYUFBYUQsRUFBS1osRUFBU1ksSUFHdEMsT0FBT1YsRUFBR1ksWSxzRUNrQmQsUUFwQ0EsU0FBY0MsR0FDVixJQUFJQyxFQUFPYixTQUFTYyxjQUFjLG1CQUNsQ2QsU0FBU2MsY0FBYyxVQUFVUCxVQUFZLEdBRzdDUSxNQUFNLHlDQUVEQyxNQUFNQyxJQUNIQyxRQUFRQyxJQUFJRixHQUNMQSxFQUFTRyxVQUVuQkosTUFBTUssSUFDSCxJQUFJQyxFQUFTVixFQUFTVixNQUFNLEtBQUssR0FDakNnQixRQUFRQyxJQUFJLGdCQUFpQkcsR0FDN0IsSUFBSyxJQUFJYixLQUFPWSxFQUNaQSxFQUFLWixHQUFLTixTQUFTb0IsSUFDWEEsRUFBUWYsSUFBTWMsSUFDZFQsRUFBS04sV0FDRCxPQUNJLE9BRUEsT0FBVyxNQUFPLEtBQU0sS0FBTSxDQUFDLElBQU9nQixFQUFhLE9BQ25ELE9BQVcsT0FDUCxPQUFXLEtBQU1BLEVBQWUsUUFDaEMsT0FBVyxJQUFLQSxFQUFxQixjQUNyQyxPQUFXLFNBQVUsV0FBYUEsRUFBZSxNQUFHLFlBQWEsS0FBTUQsR0FDckUsV0FDSiIsImZpbGUiOiIxMDAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKHBhcnNlci5wYXJzZUZyb21TdHJpbmcoRE9NY3JlYXRvcignZGl2JywgJ3NtdGgnLCksICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yKCd0YWdfb2ZfRE9NX2VsZW1lbnQnKSlcblxuZnVuY3Rpb24gRE9NY3JlYXRvcih0YWcsIGNvbnRlbnQgPSBudWxsLCBzZXRfY2xhc3MgPSBudWxsLCBzZXRfYXR0ciA9IG51bGwsIHNldGlkID0gbnVsbCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoc2V0X2NsYXNzKSB7XG4gICAgICAgIGxldCB0ZW1wID0gc2V0X2NsYXNzLnNwbGl0KCcgJyk7XG4gICAgICAgIHRlbXAuZm9yRWFjaCgoY2xhc3NuYW1lKSA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH1cbiAgICBpZiAoc2V0aWQpIHtcbiAgICAgICAgZWwuaWQgPSBzZXRpZDtcbiAgICB9XG4gICAgaWYgKHNldF9hdHRyKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzZXRfYXR0cikge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgc2V0X2F0dHJba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsLm91dGVySFRNTDtcbn1cbmV4cG9ydCBkZWZhdWx0IERPTWNyZWF0b3I7XG4vLyBsZXQgYnV0dG9ubiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nJylcbi8vXG4vLyBidXR0b25uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbi8vICAgICBmZXRjaCgnaHR0cHM6Ly9hcXVlb3VzLXNoZWxmLTU0ODQ4Lmhlcm9rdWFwcC5jb20vJywpXG4vLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gLmNvbnRhaW5lciAuY2F0YWxvZy5qdXN0X2Ryb3BwZWQnKSA9PSBudWxsKXtcbi8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIC5jb250YWluZXInKVxuLy8gICAgICAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocGFyc2VyLnBhcnNlRnJvbVN0cmluZyhcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2RpdicsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxudWxsLCd3cmFwcGVyJylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFwiY2Fyb3VzZWxcIiksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhdGFsb2cganVzdF9kcm9wcGVkJyApXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAsICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZycpKVxuLy8gICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgIGRhdGFbJ2p1c3RfZHJvcHBlZCddLmZvckVhY2goKHByb2R1Y3QpID0+e1xuLy8gICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcbi8vICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKHBhcnNlci5wYXJzZUZyb21TdHJpbmcoIERPTWNyZWF0b3IoJ2RpdicsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdpbWcnLG51bGwsbnVsbCx7J3NyYyc6cHJvZHVjdFsnaW1nJ10sJ2FsdCc6cHJvZHVjdFsnbW9kZWwnXX0pK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignYnInKStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gzJyxwcm9kdWN0WydicmFuZCddKStcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2JyJykrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdoMicscHJvZHVjdFsnbW9kZWwnXSkrXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBET01jcmVhdG9yKCdicicpK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcigncCcscHJvZHVjdFsncHJpY2UnXSksJ2l0ZW0nLG51bGwsJ2l0ZW1fJytwcm9kdWN0WydpZCddKSwgJ3RleHQvaHRtbCcpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2JykpXG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9KVxuLy8gKVxuLy9cbi8qIC9nZXQgaW5mb1xcICovXG4vL2ZldGNoKCcvZ2V0JykudGhlbigocmVzcG9uc2UpPT57XG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCl9KS50aGVuKChkYXRhKT0+e1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhW1wianVzdF9kcm9wcGVkXCJdKX0pXG5cbiIsImltcG9ydCBET01jcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XG5cblxuZnVuY3Rpb24gdmlldyh2aWV3TmFtZSkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiAuY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuaW5uZXJIVE1MID0gJyc7XG5cblxuICAgIGZldGNoKCdodHRwczovL3NlcnZlci1mb3Itb2tyLmhlcm9rdWFwcC5jb20vJywpXG4gICAgICAgIC8vaHR0cHM6Ly9hcXVlb3VzLXNoZWxmLTU0ODQ4Lmhlcm9rdWFwcC5jb20vXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtaWQgPSB2aWV3TmFtZS5zcGxpdCgnXycpWzFdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9GB0Y7QtNCwINC90LDQvCDQvdCw0LTQvicsIGl0ZW1pZCk7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0LmlkID09IGl0ZW1pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignaW1nJywgbnVsbCwgbnVsbCwgeydzcmMnOiBwcm9kdWN0WydpbWcnXX0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcignZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2gzJywgcHJvZHVjdFsnbW9kZWwnXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NY3JlYXRvcigncCcsIHByb2R1Y3RbJ2Rlc2NyaXB0aW9uJ10pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTWNyZWF0b3IoJ2J1dHRvbicsICdUbyBDYXJ0ICcgKyBwcm9kdWN0WydwcmljZSddLCAnYWRkYnV0dG9uJywgbnVsbCwgaXRlbWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCAnY29udGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgJ2NvbnRlbnRfd3JhcHBlcicpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9