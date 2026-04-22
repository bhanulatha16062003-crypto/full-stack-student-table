import { getPool } from "../config/db.js";

// ✅ CREATE Trainer
export const createTrainerService = async (data) => {
  const {
    institute_id,
    trainer_name,
    mobile_number,
    email_id,
    image_url,
    description,
    experience_years,
    class_timings
  } = data;

  const pool = getPool();

  await pool.request()
    .input("institute_id", institute_id)
    .input("trainer_name", trainer_name)
    .input("mobile_number", mobile_number)
    .input("email_id", email_id)
    .input("image_url", image_url)
    .input("description", description)
    .input("experience_years", experience_years)
    .input("class_timings", class_timings)
    .query(`
      INSERT INTO trainers 
      (institute_id, trainer_name, mobile_number, email_id, image_url, description, experience_years, class_timings)
      VALUES 
      (@institute_id, @trainer_name, @mobile_number, @email_id, @image_url, @description, @experience_years, @class_timings)
    `);

  return { message: "Trainer created successfully" };
};

// ✅ GET Trainers by Institute ⭐
export const getTrainersByInstituteService = async (institute_id) => {
  const pool = getPool();

  const result = await pool.request()
    .input("institute_id", institute_id)
    .query(`
      SELECT 
        trainer_id,
        institute_id,
        trainer_name,
        mobile_number,
        email_id,
        image_url,
        description,
        experience_years,
        class_timings
      FROM trainers
      WHERE institute_id = @institute_id
    `);

  return result.recordset;
};

// ✅ UPDATE
export const updateTrainerService = async (id, data) => {
  const {
    trainer_name,
    mobile_number,
    email_id,
    image_url,
    description,
    experience_years,
    class_timings
  } = data;

  const pool = getPool();

  await pool.request()
    .input("id", id)
    .input("trainer_name", trainer_name)
    .input("mobile_number", mobile_number)
    .input("email_id", email_id)
    .input("image_url", image_url)
    .input("description", description)
    .input("experience_years", experience_years)
    .input("class_timings", class_timings)
    .query(`
      UPDATE trainers
      SET trainer_name = @trainer_name,
          mobile_number = @mobile_number,
          email_id = @email_id,
          image_url = @image_url,
          description = @description,
          experience_years = @experience_years,
          class_timings = @class_timings
      WHERE trainer_id = @id
    `);

  return { message: "Trainer updated successfully" };
};

// ✅ DELETE
export const deleteTrainerService = async (id) => {
  const pool = getPool();

  await pool.request()
    .input("id", id)
    .query(`
      DELETE FROM trainers
      WHERE trainer_id = @id
    `);

  return { message: "Trainer deleted successfully" };
};