export default async (req, res) => {
  try {
    await res.cookie("user", undefined, {
      masAge: 0,
      httpOnly: true,
      secure: true,
      signed: true,
    });
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
