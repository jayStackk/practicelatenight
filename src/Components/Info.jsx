export default function info({ name, data }) {
    return (
      <div>
        {data?.sprites && (
          <div>
            <h2>Meet {name}</h2>;
            <p>
              <img src={data.sprites.front_shiny} alt={name} />
            </p>
            <p>ID is {data.id}</p>
          </div>
        )}
      </div>
    );
  }
  