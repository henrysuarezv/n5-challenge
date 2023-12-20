export default function Root(props) {
  document.addEventListener('renderSerie', (event: CustomEvent) => {
    console.log(event.detail.data);
    // Handle shared data
  });
  return (<section>{props.name} is mounted!</section>);
}
