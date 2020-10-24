module.exports = function toReadable (number) {
  let numb = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    let new_numb, str='';

    if(number >= 100 && number< 1000){
        new_numb = Math.floor(number/100);
        str += numb[new_numb] + ' hundred';
        number-=new_numb*100;
    }

    if(number >= 21 && number< 100){
        new_numb = Math.floor(number/10) * 10;
        str += ' ' + numb[new_numb];
        number-=new_numb;
    }

    if(number >= 0 && number < 21){
        str += ' ' + numb[number];
    }

    str=str.replace(/^\ /, '').replace(' zero', '')

    console.log(str);
    return str;
}
