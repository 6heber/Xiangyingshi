/**
 * Created by heber on 2019/3/27.
 */
var a=document.getElementById("s"),
    d=document.getElementById("d");
var flag=false;
a.addEventListener('click',function(){
    if (!flag) {
        // ������δ��ʾʱ
        // topֵ�����ı�ʱ��������
        d.style.transition ='top 1s linear';
        d.style.top = '0px';
        // �ı䵼����״̬��ʶ
        flag=true;
    }else{
        d.style.top = '-160px';
        flag=false;
    }
})
