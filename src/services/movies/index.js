const service = class MovieService {
    #movieRepo

    constructor(movieRepo) {
        this.#movieRepo = movieRepo
    }

    async getAllMovies() {
        try {
            return await this.#movieRepo.find()
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getMovieByID(id) {
        try {
            return await this.#movieRepo.findById(id)
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getMoviesByTitle(title) {
        try {
            const movies = await this.#movieRepo.find()

            return movies.filter((movie) => {
                return movie.title.includes(title)
            })
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getMoviesByGenre(genre) {
        try {
            const movies = await this.#movieRepo.find()

            return movies.filter((movie) => {
                return movie.genre.includes(genre)
            })
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

module.exports = service
