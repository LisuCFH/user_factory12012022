function BasicUser(email) {
    this.email = email;
    this.rank = "user";
    this.password = this.rank+Math.round(Math.random()*1000)+"_1234";    
}

function AdminUser(email) {
    BasicUser.call(this, email);
    this.rank = "admin";
}

let UserFactory = {

        getUser: function(rank) {
        let user;
        let email = rank+Math.round(Math.random()*1000)+"@example.com"

        switch(rank) {
            case "admin":
                user = new AdminUser(email);
            break;
            case "user":
            default:
                user = new BasicUser(email);
        }

        user.trainingRequired = true;
        user.info = function() {
            console.log(this.name, this.rank, this.email);
        }
        return user;
    }
};
//          (Using in Chrome console)
//    let user1 = UserFactory.getUser("user");
//    undefined
//    user1
//    BasicUser {email: 'user267@example.com', rank: 'user', password: 'user487_1234', trainingRequired: true, info: ƒ}
//    user1.info();
//    VM5112:29 undefined 'user' 'user267@example.com'
//    undefined
//    user1.name = "Ola"
//    'Ola'
//    user1.info();
//    VM5112:29 Ola user user267@example.com
//    undefined
//    admin1 = UserFactory.getUser("admin");
//    AdminUser {email: 'admin686@example.com', rank: 'admin', password: 'user787_1234', trainingRequired: true, info: ƒ}
//    let user2 = UserFactory.getUser("uewfvgewfv");
//    undefined
//    user2
//    BasicUser {email: 'uewfvgewfv656@example.com', rank: 'user', password: 'user651_1234', trainingRequired: true, info: ƒ}