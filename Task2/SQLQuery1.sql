WITH SubTree AS (          
    SELECT
        s.id,
        s.parent_id,
        s.name
    FROM dbo.subdivisions s
    WHERE s.parent_id = (
        SELECT subdivision_id
        FROM dbo.collaborators
        WHERE id = 710253
    )                       

    UNION ALL

    SELECT
        s2.id,
        s2.parent_id,
        s2.name
    FROM dbo.subdivisions s2
    JOIN SubTree st ON s2.parent_id = st.id
),
CollsCnt AS (              
    SELECT
        subdivision_id,
        COUNT(*) AS colls_count
    FROM dbo.collaborators
    GROUP BY subdivision_id
)
SELECT
    c.id,                        
    c.name,                      
    s.name      AS sub_name,     
    s.id        AS sub_id,       
    CASE                           
        WHEN s.parent_id IS NULL THEN 1
        WHEN p1.parent_id IS NULL THEN 2
        WHEN p2.parent_id IS NULL THEN 3
        ELSE 4                    
    END AS sub_level,
    cc.colls_count               
FROM SubTree s
JOIN dbo.collaborators c
    ON c.subdivision_id = s.id
JOIN CollsCnt cc
    ON cc.subdivision_id = s.id
LEFT JOIN dbo.subdivisions p1    
    ON p1.id = s.parent_id
LEFT JOIN dbo.subdivisions p2    
    ON p2.id = p1.parent_id
WHERE
    c.age < 40
    AND s.id NOT IN (100055, 100059)   
ORDER BY
    sub_level,
    sub_id,
    c.id;
