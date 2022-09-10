'use strict';
const user = [
    {
        Id: 1,
        Name: 'Kỳ',
    },
    {
        Id: 2,
        Name: 'Yên',
    },
];

const cmts = [
    {
        Id: 1,
        Cmt: 'Đi thực tập thôi',
        userID: 1,
    },
    {
        Id: 2,
        Cmt: 'OK!',
        userID: 2,
    },
];

const promise = Promise.all([cmts, user]);

promise
    .then((data) => {
        return {
            user: data[1],
            cmts: data[0],
        };
    })
    .then((data) => {
        let html = '';
        data.cmts.forEach((obj) => {
            let data2 = data.user.find((us) => {
                return us.Id === obj.userID;
            });
            html += `${data2.Name}: ${obj.Cmt} \n`;
        });
        console.log(html);
    });
