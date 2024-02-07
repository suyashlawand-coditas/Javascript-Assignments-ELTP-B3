// Build a simple authentication system. Users can access a secret page only if they meet the following criteria:

// They must be logged in.
// They must be at least 18 years old.
// Their account must not be suspended.


const currentUser = {
    name: "Suyash",
    isLoggedIn: true,
    age: 23,
    isSuspended: false
}

if (currentUser.isLoggedIn && currentUser.age > 18 && !currentUser.isSuspended) {
    console.log("User is permitted");
} else {
    console.log("User is not permitted");
}