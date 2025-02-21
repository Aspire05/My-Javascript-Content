function blockScopeExample() {
    if (true) {
        let blockScopedVariable = "I am block-scoped";
        console.log(blockScopedVariable); // Accessing block-scoped variable
    }

    // This would result in an error since blockScopedVariable is not accessible here
    // console.log(blockScopedVariable);
}

blockScopeExample();
