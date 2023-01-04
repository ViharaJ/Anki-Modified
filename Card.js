class Card {
    constructor(question, answer){
        this.question = question
        this.answer = answer;
    }

    getAnswer(){
        console.log(this.answer)
        return this.answer;
    }
}