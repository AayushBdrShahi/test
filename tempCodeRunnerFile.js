
const map = new Map();
map.set('NE',"Nepal");
map.set('USA',"United States of America");
map.set('IN',"India");
map.set('NE',"Nepal");

// console.log(map);

for (const [key,value]of map) {
    console.log(key,':-',value);
}