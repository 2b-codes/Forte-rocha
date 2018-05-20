const dummy = {
	name: "Product Title",
	color: "black",
	image: { src: "https://loremflickr.com/320/240/brazil", alt: "lorem pixel" },
	images: [
		{src: "https://loremflickr.com/320/240/dog", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/brazil,rio", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/brazil,girl/all", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/dog", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/brazil,rio", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
		{src: "https://loremflickr.com/320/240/paris", alt: "lorem pixel"},
	],
	description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker",
};

export default class ProductEntity {

	constructor(product = dummy) {
		this.name = product.name;
		this.color = product.color;
		this.price = product.price;
		this.image = product.image;
		this.images = product.images;
		this.description = product.description;
	}

  

}