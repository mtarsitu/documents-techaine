var a = ['','unu ','doi ','trei ','patru ', 'cinci ','sase ','sapte ','opt ','noua ','zece ','unsprezece ','doisprezece ','treisprezece ','paisprezece ','cincisprezece ','saisprezece ','saptisprezece ','optisprezece ','nouasprezece '];
var aF = ['','o ','doua ','trei ','patru ', 'cinci ','sase ','sapte ','opt ','noua ']
var b = ['', '', 'douazeci','treizeci','patruzeci','cincizeci', 'saizeci','saptezeci','optzeci','nouazeci'];

export const inWords= (num)=> {
    if ((num = num.toString()).length > 9) return 'overflow';
    let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (aF[Number(n[2])] || b[n[2][0]] + ' ' + aF[n[2][1]]) + 'suta ' : '';
    str += (n[3] != 0) ? (aF[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'mii ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'sute ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'si ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'lei ' : 'lei';
    return str;
}