class IAmAClass {
    number = 42
}

export function library() {
    return new IAmAClass().number
}

