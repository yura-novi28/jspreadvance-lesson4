class MyString{
    reverse(str){
        return str.split('').reverse().join('');
    }
    ucFirst(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    ucWords(str){
        let arr = str.split(' ');
        let text = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return text;
    }
}

const str1 = new MyString();
console.log(str1.reverse('IVAN'));
console.log(str1.ucFirst('arsenal'));
console.log(str1.ucWords('arsenal arsenal arsenal'))