class Topic {
    constructor(element){
        // assign this.element to DOM reference
        this.element = element;
        this.dataTopic = this.element.dataset.topic; 
  
      // Check to see if the Topic topic is equal to 'all'
      if ( this.dataTopic === 'all' ){
        // If `all` is true, display all topics
        this.articles = document.querySelectorAll(`.content-container article`);
        } else {
        // else if `all` is false, only select the themes with matching selection
        this.articles = document.querySelectorAll(`.content-container article[data-topic="${this.dataTopic}"]`);
      }
  
       // Convert selected topics to displayTopic
      this.articles = Array.from(this.articles).map((topic) => new displayTopic(topic));
  
      // Add a click event that invokes this.selectTab
      this.element.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
  
      // Select classes named .topic
      const allTopics = document.querySelectorAll('.topic');
      
      // Remove the .active class from each element
      allTopics.forEach(e => e.classList.remove('active'));
  
      // Select all articles
      const articles = document.querySelectorAll(`.content-container article`);
  
      // Set display style for each article to 'none'
      articles.forEach(e => e.style.display = "none");
      
      // Add a class of ".active" to selected element
      this.element.classList.add('active');
    
      // Display selected articles
      this.articles.forEach(e => e.selectTopic());
    }
  }
  
  class displayTopic {
    constructor(element){
      // Assign this.element from this.display (selected topics to displayTopic)
      this.element = element;
    }
    selectTopic(){
      // Update the style of selected topics to display = "flex"
      this.element.style.display = "block";
    }
  
  }
  
  // Select classes named .topic and return a new instance of Topic
  let topics = document.querySelectorAll('.topic').forEach( topic => new Topic(topic));
  