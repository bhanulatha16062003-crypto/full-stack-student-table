import { getPool } from "../config/db.js";

// ✅ CREATE
export const createInstitute = async (req, res) => {
  try {
    const { subcategory_id, name, location, image_url } = req.body;

    const pool = getPool();

    await pool.request()
      .input("subcategory_id", subcategory_id)
      .input("name", name)
      .input("location", location)
      .input("image_url", image_url)
      .query(`
        INSERT INTO institutes (subcategory_id, name, location, image_url)
        VALUES (@subcategory_id, @name, @location, @image_url)
      `);

    res.status(201).json({ message: "Institute created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET by subcategory (MAIN API ⭐)
export const getInstitutesBySubcategory = async (req, res) => {
  try {
    const { subcategory_id } = req.params;

    const pool = getPool();

    const result = await pool.request()
      .input("subcategory_id", subcategory_id)
      .query(`
        SELECT 
          institute_id,
          subcategory_id,
          name,
          location,
          image_url
        FROM institutes
        WHERE subcategory_id = @subcategory_id
      `);

    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ UPDATE
export const updateInstitute = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, image_url } = req.body;

    const pool = getPool();

    await pool.request()
      .input("id", id)
      .input("name", name)
      .input("location", location)
      .input("image_url", image_url)
      .query(`
        UPDATE institutes
        SET name = @name,
            location = @location,
            image_url = @image_url
        WHERE institute_id = @id
      `);

    res.json({ message: "Institute updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ DELETE
export const deleteInstitute = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = getPool();

    await pool.request()
      .input("id", id)
      .query(`
        DELETE FROM institutes
        WHERE institute_id = @id
      `);

    res.json({ message: "Institute deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};