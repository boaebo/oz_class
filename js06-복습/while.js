let i = 100;
let count = 0;

        while (i <= 500) {
            if(i % 4 === 0){
                document.write(i + ' ');
                count++;

                if(count % 5 === 0){
                document.write('<br>');
                }
            }
            i++;
        }; 