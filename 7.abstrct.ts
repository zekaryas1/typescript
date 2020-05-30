abstract class ButtonCreator {

    onClick() : void{
        const button = this.createButton();
        button.click();
    }

    abstract createButton()

}