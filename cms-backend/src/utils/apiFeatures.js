export class APIFeatures {

  constructor(query, queryString) {

    this.query = query;
    this.queryString = queryString;

  }

  filter() {

    const queryObj =
      { ...this.queryString };

    const excluded = [
      "page",
      "limit",
      "search"
    ];

    excluded.forEach(el =>
      delete queryObj[el]
    );

    this.query =
      this.query.find(queryObj);

    return this;

  }

  paginate() {

    const page =
      this.queryString.page * 1 || 1;

    const limit =
      this.queryString.limit * 1 || 10;

    const skip =
      (page - 1) * limit;

    this.query =
      this.query.skip(skip)
        .limit(limit);

    return this;

  }

  search() {

    if (this.queryString.search) {

      this.query =
        this.query.find({

          "title.az": {
            $regex:
              this.queryString.search,
            $options: "i"
          }

        });

    }

    return this;

  }

}